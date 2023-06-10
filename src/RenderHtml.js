function RenderHtml(props){

    return <div>
        <p>This is the HTML passed from the parent component: </p>
        {props.children}

    </div>
}

export default RenderHtml;