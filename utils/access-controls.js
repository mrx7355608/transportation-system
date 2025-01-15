const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.role === "admin");

const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = accessControls.userIsAdmin(auth);
  const isOwner = accessControls.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const accessControls = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

module.exports = { accessControls };
