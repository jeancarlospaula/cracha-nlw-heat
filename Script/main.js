const socialMediaLinks = {
    github: "jeancarlospaula",
    youtube: "channel/UCCNJ6S2jGdfNtPDBUC8KEoQ",
    instagram: "jean.carlospaula",
    facebook: "profile.php?id=100011337984100",
    twitter: "JeanTutors"
}

function changeSocialMediaLinks() {
    for(let li of links.children){
        const media = li.getAttribute("class")

        li.children[0].href = `https://www.${media}.com/${socialMediaLinks[media]}`
    }
}

changeSocialMediaLinks()

function getUserInfosGithub(){
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        profileName.textContent = data.name
        profileBio.textContent = data.bio
        profileImage.src = data.avatar_url
        profileLink.href = data.html_url
        profileTitle.textContent = data.login
    })
}

getUserInfosGithub()