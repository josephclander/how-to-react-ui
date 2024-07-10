const Explanation = () => {
  return (
    <>
      <p>
        To keep track of the task list, you need to use the{" "}
        <code className="code">useState</code> hook. To access the users input
        you could use state but as it is just a reference to be added to your
        task list, <code className="code">useRef</code> will be more efficient.
      </p>
      <p>
        Notice that the tasks are rendered to the page inside an unordered list.
        For accessibility reasons, it&apos;s makes sense to add semantic HTML.
      </p>
      <p>
        Adding a new task takes the input via the{" "}
        <code className="code">inputData useRef</code> and runs it through{" "}
        <code className="code">handleSubmit</code>. After checking the data a
        new <code className="code">unique id</code> is added. Note how we update
        the todos state with a function and copy the previous state before
        resetting the input.
      </p>
      <p>
        The <code className="code">deleteHandler</code> works by filtering all
        values that <em>are not</em> equal to the task you want to remove.
      </p>
    </>
  );
};

export default Explanation;
