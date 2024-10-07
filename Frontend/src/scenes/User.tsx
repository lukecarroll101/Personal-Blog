import TopBar from "../components/TopBar";

// align-items-center
function UserMe() {
  return (
    <>
      <TopBar text="🏠 " to="/" title="User" />
      <h1>This is the user page</h1>
    </>
  );
}

export default UserMe;
