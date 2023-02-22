class Todo {
  id: string;
  text: string;

  constructor(incomingTodoText: string) {
    this.id = new Date().toISOString();
    this.text = incomingTodoText;
  }
}

export default Todo;
