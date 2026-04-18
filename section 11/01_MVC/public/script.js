const button=document.querySelectorAll('li button');

button.forEach((button)=>{
    button.addEventListener("click",async()=>{
        const id=button.dataset.id;

        const response=await fetch(`http://http://localhost:7200/todos/${id}`,{
            method :"DELETE",
        });

        await response.json();

        window.location.reload();

    })
})