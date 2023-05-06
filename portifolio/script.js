const repositories = document.querySelector('.projetos-git')

function getApiGitHub() {
    fetch('https://api.github.com/users/klebsonstifler/repos')
        .then(async res => { //se a sincronização não for bem sucedida ele da um erro na tela
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            data.map( item => {
                let project = document.createElement('div');

                project.innerHTML = `
                <div class="create-js" >
                    <div>
                        <h1 class="title">${item.name}</h1>
                        <span class="date-create">${ Intl.DateTimeFormat('pt-br').format(new Date( item.created_at))}</span>
                    </div>
                    <div>
                        <a href="${item.html_url}" target="_blank">${item.html_url}</a>
                        <span class="language"><span class="circle"></span>${item.language}</span>
                    </div>
                </div>
                `

            repositories.appendChild(project);
            })
        })
}                                                                  

getApiGitHub()