import React from "react";



function Card({userName,work,framework,bg}){

    // console.log(props);
    return(
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/123080253?v=4" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “{framework} is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {userName}
      </div>
      <div>
        - {work}
      </div>
    </figcaption>
  </div>
</figure>
    )
    
}





export default Card;