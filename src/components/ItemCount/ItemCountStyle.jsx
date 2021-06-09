export const itemCountStyle = () => {
    return ({
        itemCountContainer:{
            fontFamily: 'roboto',
            display:'flex',
            flexFlow: 'column nowrap',
            rowGap: '2rem',
            '& > button':{
                display:'flex',
                justifyContent:'flex-center',
                alignItems:'center',
                columnGap:'1rem',
                padding:'0.5rem',
                fontFamily: 'roboto',
                width: 'fit-content',
                backgroundColor: 'transparent',
                border: '1px solid pink',
                cursor:'pointer',
                transition: '0.3s',
                '&:hover':{
                    backgroundColor: 'pink',
                    color:'white'
                }
                
            }
        },
        cantidadInput:{
            display:'flex',
            alignItems:'center',
            columnGap: '1rem'
        },
        inputGroup: {      
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent:'center',
            border: '2px solid pink',
            '& > div > button':{
                display:'flex',
                alignItems:'center',
                backgroundColor: 'transparent',
                border: '1px solid pink',
                cursor: 'pointer',
            },
            '& > span':{
                border: 'transparent',
                width:'4.4rem',
                textAlign: 'center',
                fontSize:'1rem',        
                
            }
        }
    })
}