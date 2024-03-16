import React, { useEffect } from 'react';
import { useGameBoard } from '../GameBoard';

type PlayFieldProps = {

};

const PlayField: React.FC<PlayFieldProps> = () => {
    const { board, moveDown, moveLeft, moveRight, drop } = useGameBoard()
    
    const rowNum = 20;
    const colNum = 10;

    const initializeGame = () => {

    };
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            event.preventDefault;
            switch (event.key) {
                case 'ArrowDown': 
                    moveDown();
                    break;
                case 'ArrowRight':
                    moveRight();
                    break;
                case 'ArrowLeft':
                    moveLeft();
                    break;
                case ' ':
                    drop();
                    break;
                case 'Escape':
                    // TODO drop the pause menu
                    break;
            }
            console.log('key pressed', event.key);
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);
    

    return (
        <div className='absolute w-full h-full top-0 left-0 z-10 flex flex-col'>
            {board.map((row, rowIndex) => {
                return (<div style={{height: '5%'}} className='w-full flex ' key={rowIndex}>
                    {Array.from({ length: colNum }).map((_, i) => {
                        return (
                            <div className=' h-full bg-black' key={rowIndex * 10 + i} 
                            style={{ width: '10%', border: '1px solid green', boxSizing: 'border-box', backgroundColor: (row & (1 << i)) ? "red" : ""}}>
                                {row & (1 << i)}
                            </div>
                        )

                    })}
                </div>)
            }
            )}
        </div>
    )

}
export default PlayField;