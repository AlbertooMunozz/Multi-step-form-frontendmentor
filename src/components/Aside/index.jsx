import SectionIndex from "./sectionIndex"

const sections = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY']

const ContainerSidebar = () => {
    return (
        <aside>
            {sections.map((info, index) => <SectionIndex info={info} indexS={index + 1} key={index}/>)}
        </aside>
    )
}

export default ContainerSidebar