function UserProfilePage(props) {
  return <h1>{props.user.name}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  return {
    props: {
      user: {
        name: 'Michael',
      },
    },
  };
}
