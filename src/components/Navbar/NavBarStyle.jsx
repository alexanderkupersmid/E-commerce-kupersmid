export const NavBarStyle = theme => {
    return({
        appBar: {
            backgroundColor: ('to left','#FAA5CB','#F4BED6'),
            color: '#FDFCC7',
            position: 'static',

        },
        toolBar:{
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20 
        },
        title:{
            flexGrow: 1,
            fontFamily: 'roboto',   
            fontWeight: 400 
        },
        buttons:{
            color: '#FDFCC7',
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: 'roboto',
            '&:hover':{
                color: '#5c4000',
                backgroundColor: 'transparent'
            }
        }
    })
}