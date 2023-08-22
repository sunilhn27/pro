"use client"
import React, { useState } from 'react'
import Model from './Model'

function Home() {

    const [showModel, setShowModel] = useState(false);


    const closeModel = () => {
        setShowModel(false);
    }

    return (
        <section className='max-w-4xl mx-auto mt-32'>
            <div>Id eu aliquip est proident dolore consequat deserunt reprehenderit occaecat qui ut ea ut non. Esse consequat tempor occaecat est et deserunt culpa consectetur et. Cillum fugiat excepteur sunt minim nostrud irure exercitation pariatur. Ipsum Lorem reprehenderit fugiat minim nostrud ea nisi labore officia nostrud. Aliqua ex ad aute nostrud reprehenderit officia id non. Cillum proident nulla est officia cupidatat aliquip ad. Commodo exercitation amet culpa dolor aliqua nisi voluptate.

                <div>
                    Irure non incididunt sunt duis non in exercitation ut est et cillum. Labore duis irure velit do nisi qui magna deserunt veniam nostrud consectetur. Nulla consectetur voluptate consequat eiusmod proident fugiat et officia. Occaecat sunt eiusmod ad ullamco amet dolor aliquip sunt reprehenderit anim qui reprehenderit. Aliqua consequat fugiat veniam occaecat nisi dolor deserunt duis dolor cillum. Aute dolore elit elit mollit fugiat eiusmod consequat in quis ut amet anim.
                </div>
            </div>

            <div>Id eu aliquip est proident dolore consequat deserunt reprehenderit occaecat qui ut ea ut non. Esse consequat tempor occaecat est et deserunt culpa consectetur et. Cillum fugiat excepteur sunt minim nostrud irure exercitation pariatur. Ipsum Lorem reprehenderit fugiat minim nostrud ea nisi labore officia nostrud. Aliqua ex ad aute nostrud reprehenderit officia id non. Cillum proident nulla est officia cupidatat aliquip ad. Commodo exercitation amet culpa dolor aliqua nisi voluptate.

                <div>
                    Irure non incididunt sunt duis non in exercitation ut est et cillum. Labore duis irure velit do nisi qui magna deserunt veniam nostrud consectetur. Nulla consectetur voluptate consequat eiusmod proident fugiat et officia. Occaecat sunt eiusmod ad ullamco amet dolor aliquip sunt reprehenderit anim qui reprehenderit. Aliqua consequat fugiat veniam occaecat nisi dolor deserunt duis dolor cillum. Aute dolore elit elit mollit fugiat eiusmod consequat in quis ut amet anim.
                </div>
            </div>

            <div>Id eu aliquip est proident dolore consequat deserunt reprehenderit occaecat qui ut ea ut non. Esse consequat tempor occaecat est et deserunt culpa consectetur et. Cillum fugiat excepteur sunt minim nostrud irure exercitation pariatur. Ipsum Lorem reprehenderit fugiat minim nostrud ea nisi labore officia nostrud. Aliqua ex ad aute nostrud reprehenderit officia id non. Cillum proident nulla est officia cupidatat aliquip ad. Commodo exercitation amet culpa dolor aliqua nisi voluptate.

                <div>
                    Irure non incididunt sunt duis non in exercitation ut est et cillum. Labore duis irure velit do nisi qui magna deserunt veniam nostrud consectetur. Nulla consectetur voluptate consequat eiusmod proident fugiat et officia. Occaecat sunt eiusmod ad ullamco amet dolor aliquip sunt reprehenderit anim qui reprehenderit. Aliqua consequat fugiat veniam occaecat nisi dolor deserunt duis dolor cillum. Aute dolore elit elit mollit fugiat eiusmod consequat in quis ut amet anim.
                </div>
            </div>
            <button onClick={() => setShowModel(true)} className='border-2 border-e-gray-500 rounded-md px-4 py-2 '>Show Model</button>
            {showModel && <Model closeModel={closeModel} />}
        </section>
    )
}

export default Home