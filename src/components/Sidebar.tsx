import { Link } from "react-router"

const Sidebar = () => {
    return (
        <>
            <section id="sidebar">
                <div className="inner">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/match">Match</Link></li>
                            <li><Link to="/two">Two</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Sidebar