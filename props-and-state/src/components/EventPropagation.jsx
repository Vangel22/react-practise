export const EventExample = () => {
  const handleEventOne = (e) => {
    e.stopPropagation();

    alert("Event one");
  };

  return (
    <form onClick={() => alert("form toggling")}>
      <button onClick={(e) => handleEventOne(e)}>Event one</button>
      <button onClick={() => alert("Event two")}>Event two</button>
    </form>
  );
};
