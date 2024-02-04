export default class GithubProfileModel {
    constructor() {
        this.login = "";
        this.id = 0;
        this.node_id = "";
        this.avatarUrl = "";
        this.gravatarId = "";
        this.url = "";
        this.htmlUrl = "";
        this.followersUrl = "";
        this.followingUrl = "";
        this.gistsUrl = "";
        this.starredUrl = "";
        this.subscriptionsUrl = "";
        this.organizationsUrl = "";
        this.reposUrl = "";
        this.eventsUrl = "";
        this.receivedEventsUrl = "";
        this.type = "";
        this.siteAdmin = false;
        this.name = "";
        this.company = "";
        this.blog = "";
        this.location = "";
        this.email = "";
        this.hireable = false;
        this.bio = "";
        this.twitterUsername = "";
        this.publicRepos = 0;
        this.publicGists = 0;
        this.followers = 0;
        this.following = 0;
        this.createdAt = "";
        this.updatedAt = "";
    }

    static fromJson(json) {
        const profile = new GithubProfileModel();
        profile.login = json.login;
        profile.id = json.id;
        profile.node_id = json.node_id;
        profile.avatarUrl = json.avatar_url;
        profile.gravatarId = json.gravatar_id;
        profile.url = json.url;
        profile.htmlUrl = json.html_url;
        profile.followersUrl = json.followers_url;
        profile.followingUrl = json.following_url;
        profile.gistsUrl = json.gists_url;
        profile.starredUrl = json.starred_url;
        profile.subscriptionsUrl = json.subscriptions_url;
        profile.organizationsUrl = json.organizations_url;
        profile.reposUrl = json.repos_url;
        profile.eventsUrl = json.events_url;
        profile.receivedEventsUrl = json.received_events_url;
        profile.type = json.type;
        profile.siteAdmin = json.site_admin;
        profile.name = json.name;
        profile.company = json.company;
        profile.blog = json.blog;
        profile.location = json.location;
        profile.email = json.email;
        profile.hireable = json.hireable;
        profile.bio = json.bio;
        profile.twitterUsername = json.twitter_username;
        profile.publicRepos = json.public_repos;
        profile.publicGists = json.public_gists;
        profile.followers = json.followers;
        profile.following = json.following;
        profile.createdAt = json.created_at;
        profile.updatedAt = json.updated_at;
        return profile;
    }

    addKey(key, value) {
        this[key] = value;
    }

    toJson() {
        return {
            name: this.name,
            url: this.htmlUrl,
            company: this.company,
            blog: this.blog,
            location: this.location,
            email: this.email ?? "",
            hireable: this.hireable,
            bio: this.bio,
            twitter_username: this.twitterUsername,
            public_repos: this.publicRepos,
            public_gists: this.publicGists,
            skills: this.skills,
        };
    }
}
