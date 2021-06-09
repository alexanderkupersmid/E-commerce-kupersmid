export const itemListContainerStyle = theme => {
    return ({
        container: {
            border: '2px solid pink',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50',
            margin: '1rem 0 0', 
            background: 'white',
            padding:'1rem',
            '& h5': {
                color: 'black',
                fontFamily: 'roboto',
                fontWeight: '500'
            },
            '@media (max-width: 800px)': {
                margin:'1rem auto 1rem auto'
                
            }
        }
    })
}
