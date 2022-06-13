interface IProps {
}

export default function Footer(props: IProps) {
    return (
        <footer style={{ paddingTop: 50 }}>
            <div className="container text-center">
                <p>&#169; Team Fontys</p>
            </div>
        </footer>
    )
}