//This will be a form component that will have a text input for todo title
//and a button to submit todo
//Later it will be used to edit the todos as well
import type { TodoCardProps } from "./TodoApp";

export default function FormComponent({ title }: TodoCardProps) {
  return (
    <div>
      <form>
        <label htmlFor="title">Todo Title</label>
        <input type="text" name="title" id="title" value={title} />
        <button>Submit</button>
      </form>
    </div>
  );
}
