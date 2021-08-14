import { useState } from 'react';

import LineCard from '../LineCard';

import styles from './styles.module.scss';

export default function App() {
    let [ button, setButton ] = useState(false);

    return (
        <div id={styles.App}>
            <div id={styles.container}>
                <LineCard
                    title="Social Media Dashboard"
                    toggleText={true}
                    smallText="Total Followers: 23,004"
                    toggleButton={true}
                    valueButton={ button }
                    clickButton={() => setButton(!button)}
                >
                    <h1>Olá mundo</h1>
                </LineCard>
            </div>
        </div>
    )
}