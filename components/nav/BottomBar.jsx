/* Nav Bottom Bar Component */

export default function BottomBar({bottomBar}) {
    return (
        <div className={bottomBar.display + " bottom-bar"}>
            <p>
                {bottomBar.text}
            </p>
        </div>
    )
}