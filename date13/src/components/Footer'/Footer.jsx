export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
           <p>&copy; {year} Profile. All rights reserved.</p>
        </footer>
    )
}