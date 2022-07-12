// level {2}

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    let [user,profile,p] = doc
    const userProfile = {
        user: user,
        profile: profile,
        posts: p
    };
    return userProfile;
}