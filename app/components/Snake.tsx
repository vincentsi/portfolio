'use client';

import { useEffect, useRef, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export const Snake = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [paused, setPaused] = useState(true);

  // État du jeu géré via useRef pour éviter les re-renders
  const gameState = useRef({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: 'RIGHT' as Direction,
    speed: 100,
  });

  const initGame = () => {
    gameState.current = {
      snake: [{ x: 10, y: 10 }],
      food: { x: 15, y: 15 },
      direction: 'RIGHT',
      speed: 100,
    };
    setScore(0);
    setGameOver(false);
    setPaused(true);
  };

  const generateFood = (): Position => {
    const x = Math.floor(Math.random() * 30);
    const y = Math.floor(Math.random() * 30);
    return { x, y };
  };

  const drawGame = (ctx: CanvasRenderingContext2D) => {
    // Effacer le canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, 600, 600);

    // Dessiner la nourriture
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(
      gameState.current.food.x * 20,
      gameState.current.food.y * 20,
      18,
      18
    );

    // Dessiner le serpent
    ctx.fillStyle = '#4ade80';
    gameState.current.snake.forEach((segment, index) => {
      ctx.fillRect(segment.x * 20, segment.y * 20, 18, 18);
      
      // Ajouter les yeux sur la tête du serpent
      if (index === 0) {
        ctx.fillStyle = '#000';
        const eyeSize = 4;
        
        // Position des yeux selon la direction
        let leftEye, rightEye;
        switch (gameState.current.direction) {
          case 'RIGHT':
            leftEye = { x: segment.x * 20 + 12, y: segment.y * 20 + 4 };
            rightEye = { x: segment.x * 20 + 12, y: segment.y * 20 + 12 };
            break;
          case 'LEFT':
            leftEye = { x: segment.x * 20 + 6, y: segment.y * 20 + 4 };
            rightEye = { x: segment.x * 20 + 6, y: segment.y * 20 + 12 };
            break;
          case 'UP':
            leftEye = { x: segment.x * 20 + 4, y: segment.y * 20 + 6 };
            rightEye = { x: segment.x * 20 + 12, y: segment.y * 20 + 6 };
            break;
          case 'DOWN':
            leftEye = { x: segment.x * 20 + 4, y: segment.y * 20 + 12 };
            rightEye = { x: segment.x * 20 + 12, y: segment.y * 20 + 12 };
            break;
        }
        
        ctx.fillRect(leftEye.x, leftEye.y, eyeSize, eyeSize);
        ctx.fillRect(rightEye.x, rightEye.y, eyeSize, eyeSize);
        ctx.fillStyle = '#4ade80';
      }
    });
  };

  const updateGame = () => {
    const { snake, direction, food } = gameState.current;
    const head = { ...snake[0] };

    // Mettre à jour la position de la tête
    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
    }

    // Vérifier les collisions avec les murs
    if (head.x < 0 || head.x >= 30 || head.y < 0 || head.y >= 30) {
      setGameOver(true);
      return;
    }

    // Vérifier les collisions avec le corps
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    // Ajouter la nouvelle tête
    const newSnake = [head, ...snake];

    // Vérifier si on mange la nourriture
    if (head.x === food.x && head.y === food.y) {
      setScore(prev => prev + 10);
      gameState.current.food = generateFood();
    } else {
      newSnake.pop();
    }

    gameState.current.snake = newSnake;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastUpdate = 0;

    const gameLoop = (timestamp: number) => {
      if (!gameOver && !paused) {
        if (timestamp - lastUpdate >= gameState.current.speed) {
          updateGame();
          lastUpdate = timestamp;
        }
        drawGame(ctx);
      }
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Démarrer la boucle de jeu
    animationFrameId = requestAnimationFrame(gameLoop);

    // Gestionnaire des touches
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setPaused(prev => !prev);
        return;
      }

      if (gameOver) {
        initGame();
        return;
      }

      const { direction } = gameState.current;
      switch (e.key.toLowerCase()) {
        case 'arrowup':
        case 'z':
          if (direction !== 'DOWN') gameState.current.direction = 'UP';
          break;
        case 'arrowdown':
        case 's':
          if (direction !== 'UP') gameState.current.direction = 'DOWN';
          break;
        case 'arrowleft':
        case 'q':
          if (direction !== 'RIGHT') gameState.current.direction = 'LEFT';
          break;
        case 'arrowright':
        case 'd':
          if (direction !== 'LEFT') gameState.current.direction = 'RIGHT';
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameOver, paused]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          className="border-2 border-gray-700 rounded-lg"
        />
        {(gameOver || paused) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 rounded-lg">
            <p className="text-2xl font-bold text-white mb-2">
              {gameOver ? 'Game Over!' : 'Snake Game'}
            </p>
            <p className="text-xl text-white mb-4">Score: {score}</p>
            <p className="text-white text-center">
              {gameOver 
                ? 'Appuyez sur une touche pour recommencer'
                : 'Appuyez sur ESPACE ou ENTRÉE pour jouer'}
            </p>
          </div>
        )}
      </div>
      <div className="text-center text-sm text-gray-400">
        <p>Utilisez les flèches ou ZQSD pour diriger le serpent</p>
        <p>ESPACE ou ENTRÉE pour mettre en pause</p>
      </div>
    </div>
  );
}; 