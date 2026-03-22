import { useState } from "react";
import HabitCard from './components/habitCard'
import { HabitList } from './components/habitList'

function App() {
  const [habits, setHabits] = useState(HabitList);
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  function changeCompletedStatus(id) {
    // if (habits.id === id) {
    //   let habitsCompleted = !habits.completed;
    //   console.log({ habitsCompleted, ...habits });
    //   return { habitsCompleted, ...habits };
    // }
    // return (
    // <>
    const newCompletedStatus = habits.map((habit) => {
      if (habit.id === id) {
        // let habitCompleted = !habit.completed;
        // console.log({habitCompleted, ...habit });
        // return {habitCompleted, ...habit };
        // return {!habit.completed, ...habit};

        // Calling spread later actually overwrites the 'updated' completed value, so after fixing it, you broke it again.
        // console.log({ completed: !habit.completed, ...habit });
        // console.log(`The if statement was executed.`);
        // return {completed: !habit.completed, ...habit };
        let updatedCompleted = !habit.completed;
        let updatedStreak = habit.streak;

        // habit.completed, before:
        // return { ...habit, completed: !habit.completed, streak: updatedStreak };
        // is actually checking the old value, which is wrong.
        // if (habit.completed === true) {
        // updatedStreak + 1;

        if (updatedCompleted === true) {
          updatedStreak++;
          // console.log("The value of updatedStreak inside if is " + updatedStreak);
        } else {
          updatedStreak = 0;
          // console.log("The value of updatedStreak inside else is " + updatedStreak);
        }

        // console.log("The value of updatedStreak is " + updatedStreak);
        return { ...habit, completed: !habit.completed, streak: updatedStreak };
      } else {
        // console.log(setHabits(habit));
        // console.log(`The else statement was executed.`);
        // .map() wants a transformed version of each item in return, not a update state call.
        // return setHabits(habit); -> [undefined, undefined]
        return habit;
      }
    });
    // </>
    // );

    // console.log(`The value of habits.id is: ${habits.id}`);
    console.log(`The value of id is: ${id}`);
    // console.log(habits.id === id);
    // console.log('This function has been invoked!');

    // return setHabits(habits); This code is sets the SAME old array back.
    return setHabits(newCompletedStatus);
  }

  function deleteHabit(id) {
    const newDeletedHabit = habits.filter((habit) => {
      if (habit.id != id) {
        // This is technically right, but conceptually wrong. Because objects, in React are truthy, and .filter() wants truthy or falsey. So boolean values work better.
        // What you're doing here is that, whenever a value meets a condition, meaning if the condition for the value is true, then it will be inserted into a new array.
        // console.log({...habit, habit: null});
        // return {...habit, habit: null};
        return true;
      }
    });

    // console.log(newDeletedHabit);
    return setHabits(newDeletedHabit);
  }
  // console.log(`The value of habits.id is: ${habits.id}`);
  // console.log(`The value of habits is: ${habits}`);
  // console.log(`The value of HabitList is: ${HabitList}`);
  // console.log(habits);

  // function viewCompletedHabitsOnly(completed) {
  //   const viewCompletedHabitsFiltered = habits.filter((habit) => {
  //     // If I wrote 
  //     // if (habit.completed === completed)
  //     // React gives me the UNCOMPLETED ones.
  //     if (habit.completed != completed) {
  //       console.log(habit.completed != completed);
  //       return true;
  //     }
  //   });
  //   console.log(setHabits(viewCompletedHabitsFiltered));
  //   return setHabits(viewCompletedHabitsFiltered);
  // }

  const visibleHabits = (showCompletedOnly
    ? habits.filter(habit => habit.completed)
    : habits);

  // Don't write { ...habits, habits.streak(item + 1) }, because habits.streak() is a function call, use this instead: {...habits, streak: something}.
  // Also, habits is an array, not an object, so habits.streak is invalid.
  // const streakIncrease = (habits.completed ? { ...habits, habits.streak(item + 1) } : { ...habits });

  function addNewHabit(event) {
    event.preventDefault();
    // const newHabit = event.target.value;
    // setAddNewHabit();
    // console.log(newHabitName);
    // const example = habits.push( (habit) => {
    //   // if (habit.length - 1) {
    //     // return {...habit, id: Date.now(),
    //     //   name: {newHabitName},
    //     //   streak: 0,
    //     //   completed: false}
    //     return habit.length = [
    //       {
    //         id: Date.now(),
    //         name: {newHabitName},
    //         streak: 0,
    //         completed: false
    //       }
    //     ]
    //   // }
    // } );

    // setHabits({...habits, example});
    const newHabit = {
      id: Date.now(),
      name: newHabitName,
      streak: 0,
      completed: false
    }

    const updatedHabits = [...habits, newHabit];
    console.log(habits);
    console.log(updatedHabits);
    setNewHabitName("");
    return setHabits(updatedHabits);
    // habits.map(
    //   {
    //     id: Date.now(),
    //     name: {newHabitName},
    //     streak: 0,
    //     completed: false
    //   }
    // );
    // console.log(habits);
    // setHabits();
    return;
  }

  return (
    <>
      {/* <habits/> */}
      {/* <HabitList/> */}
      {/* {...habits} */}
      <h1>Welcome to Habit Tracker! Where you can add, change, & delete your habits.</h1>

      <h2>Habits.</h2>
      {/* HabitList.map() */}
      {/* {habits.map((habit) => { */}

      {/* {(showCompletedOnly ? habits.filter((habit) => {
        return { habit.completed } : habits;
      }).map((habit) => { */}
      {/* {(showCompletedOnly 
        if () {}
       )} */}

      {/* {(showCompletedOnly
        ? habits.filter(habit => habit.completed)
        : habits).map((habit) => { */}

      {visibleHabits.map((habit) => {
        return (
          <>
            {/* Don't write 'Change data' logic inside JSX, just tell it what to display on UI. */}
            {/* <HabitCard key={habit.id} {(habit.completed) ? { ...habit, habit.streak(item + 1) } : { habit }} /> */}
            <HabitCard key={habit.id} {...habit} />

            {/* <button onClick={changeCompletedStatus} value={habit.completed}>Change the 'completed' status.</button> */}
            {/* Don't pass value attribute here, because it works better on <input/> */}
            <button key={habit.id + 1} onClick={() => { changeCompletedStatus(habit.id) }}>Change the 'completed' status</button>

            <button key={habit.id + 2} onClick={() => { deleteHabit(habit.id) }}>Delete habit.</button>

          </>
        );
      })
      }

      {/* <button key={habits.id} onClick={() => { viewCompletedOnly(habits.completed) }}>View completed habits</button> */}
      {/* setShowCompletedOnly(prev => !prev) */}
      <button onClick={() => { setShowCompletedOnly(prev => !prev) }}>Show completed habits</button>

      {/* <button key={habits.id} onClick={setShowCompletedOnly((prev) => { return !prev; })}>Show completed habits</button> */}

      <h2>Write your new habit here.</h2>
      <form onSubmit={addNewHabit}>
        <input type="text" placeholder="Practice Jeet Kune Do." onChange={(event) => setNewHabitName(event.target.value)} required />
        <button type="submit">Add</button>
      </form>

    </>
  );
}

export default App;