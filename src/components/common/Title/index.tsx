import React, {FC} from 'react';
import s from './Title.module.css'

interface ITitle {
    titleName: string
}

export const Title:FC<ITitle> = ({titleName}) => {
    return (
        <h2 className={s.title}>
            {titleName}
        </h2>
    );
};