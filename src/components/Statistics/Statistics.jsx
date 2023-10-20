const Statistics = ({ good, neutral, bad, total, positivePerc }) => {
    return (
        <div>
            <>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePerc}%</p>
            </>
        </div>
    );
}


export default Statistics;