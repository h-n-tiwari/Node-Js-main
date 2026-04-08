const adminAuth = (req, res, next) => {
    const token = "xyzgvoalfjvn";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    const token = "xyzgvoalfjvn";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized request");
    } else {
        next();
    }
};

export const Auth = {
    adminAuth,
    userAuth,
};

export default adminAuth;