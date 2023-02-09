export const user_obj = (role, email, name, team) => {
    if (role === "team" && email && name) {
        return { role: "team", team: [...(team ? team : []), { leader: email, name: name }] };
    } else {
        return { role: role };
    }
};
