export default function HabitCard(props) {
    const id = props.id;
    const name = props.name;
    const completed = props.completed;
    const streak = props.streak;

    return (
        <>
            <p>
                Id: {id}, Name: {name}, Streak: {streak}, Completed: {completed === true ? "Yes" : "No"}
            </p>
        </>
    );
}