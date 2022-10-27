import { resolveSections } from '../lib/helpers'

const RenderSections = (props: any) => {
    const { sections, logo } = props

    if (!sections) return <div>Missing sections</div>

    return (
        <>
            {sections.map((section: any) => {
                const SectionComponent = resolveSections(section)

                if (!SectionComponent)
                    return <div>Missing section {section._type}</div>

                return <SectionComponent logo={logo} {...section} key={section._key} />
            })}
        </>
    )
}

export default RenderSections
