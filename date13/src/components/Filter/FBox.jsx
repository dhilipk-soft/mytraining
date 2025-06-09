export default function FBox({fName, selected, setSelected}) {
    return (
        <div className="fbox">
            <div className="fboxTitle">
                {fName}
            </div>
            <div className="fboxChecklist">
                {
                    selected.map((s, index) => {
                        return (
                            <div className="fboxChecklistItem" key={index}>
                                <input type="checkbox" checked={s.checked} onChange={() => setSelected(selected.filter((item) => item.id !== s.id)) } />
                                <div className="fboxChecklistItemName">
                                    {s.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}