import React from 'react';
import styles from '../styles/Form.module.scss';

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ onSubmit }: FormProps) {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label>
                <input className="search-bar" type="search" name="username" />
            </label>
            <input className="search-button" type="submit" />
        </form>
    );
}

export default Form;
