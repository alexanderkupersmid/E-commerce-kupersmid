export const itemStyle = () => {
    return ({
        items: {
            // border: '1px solid blue',
            
            fontFamily: 'roboto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content',
            background: 'white',
            padding: '2rem',
            boxShadow: '-2px 2px 7px 0px rgba(0,0,0,0.75)',
            '@media (max-width: 800px)': {
                margin: '1rem auto 1rem auto'

            },
            '& img': {
                // border: '1px solid blue',
                maxWidth: '100%',
                height: 'auto',
                transition: '1.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.1, 1.1)'
                }
            },

        },
        itemText: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignSelf:'flex-start',
            padding:'1rem',
            '& h3':{
                margin:'0'
            },
            '& span':{
                padding:'0'
            },
            '& p':{
                color: 'grey',
                margin:'0'
            }
        }

    })
}