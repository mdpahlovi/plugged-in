import Main from "../components/Layout/Main"
import Author from "../components/Blog/_child/author"
import Image from "next/image"
import Related from "../components/Blog/_child/related"

export default function page() {
    return (
        <Main title="Blog Page- Plugged In">
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author></Author>
                </div>
                <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">React – A JavaScript library for building user interfaces</h1>
                    <p className="text-gray-500 text-xl text-center">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
                    <div className="py-10">
                        <Image src={"/images/react.png"} width={900} height={600} alt=""></Image>
                    </div>
                    <div className="content text-gray-600 text-lg flex flex-col gap-5">
                        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                            Declarative views make your code more predictable and easier to debug.
                            Build encapsulated components that manage their own state, then compose them to make complex UIs.

                            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                            We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

                            React can also render on the server using Node and power mobile apps using React Native.
                        </p>
                    </div>
                </div>
                <Related></Related>
            </section>
        </Main>
    )
}