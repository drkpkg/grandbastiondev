export async function getProfile(params, request) {
    // get information from my github profile
    try {
        const githubPersonalToken = process.env.GITHUB_PERSONAL_TOKEN;
        const profileResponse = await fetch("https://api.github.com/users/drkpkg", {
            headers: {
                Authorization: `token ${githubPersonalToken}`,
            },
        });
        const jsonResponse = await profileResponse.json();
        return new Response(JSON.stringify(jsonResponse), {
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            status: 200,
        });
    }
    catch (err) {
        console.log(err);
        return new Response(err, {
            headers: {
                "content-type": "application/json;charset=UTF-8",
            },
            status: 500,
        });
    }
}