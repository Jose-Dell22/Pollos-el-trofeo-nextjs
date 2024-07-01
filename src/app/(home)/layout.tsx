import { Hero } from '../Components/home/Hero';
import { Description } from '../Components/home/Description';
export default function HomeLayout({children}:{children: React.ReactNode}){
    return(
        <div>
            <Hero/>
            <Description/>
            {children}
        </div>
    )
}
