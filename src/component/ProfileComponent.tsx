const ProfileComponent = () => {
  return (
    <div className="flex justify-evenly items-center h-fit w-full mx-auto [&>*]:border-2 ">
      <div className="flex flex-col items mx-auto h-screen w-4/12 my-2 p-2">
        <div className="flex flex-col justify-center items mx-auto aspect-square h-36 rounded-md border-2">
          <img src="../images/unk.jpg" alt="alt" />
        </div>
        <div className="flex flex-col justify-center items-center [&>*]:m-16 text-center">
          <p>خوش آمدیدکاربرعزیز</p>
        </div>
      </div>
      <div className="flex h-screen w-full">
        <div className="w-full m-6 rounded shadow-md h-36 flex justify-center border-2"></div>
      </div>
      <p></p>
    </div>
  );
};
export default ProfileComponent;
