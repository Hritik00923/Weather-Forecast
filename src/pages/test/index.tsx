import { ReactElement } from "react";
interface TestProps{}

export default function Test({}:TestProps){
    return <div>Test</div>;
}

Test.getLayout = function getLayout(page:ReactElement){
    return 
       ( <div>
            <div>(page)</div>
        </div>)
}