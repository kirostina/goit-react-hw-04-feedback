import PropTypes from 'prop-types';

function FeedbackOptions({ options, onFeedback}) {
    return (
        <li>
            {options.map(item => {
                return (
                    <button key={item} type="button" onClick={() => onFeedback(item)}>
                        {item}
                    </button>
                );
            })}
        </li>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFeedback: PropTypes.func.isRequired,
};