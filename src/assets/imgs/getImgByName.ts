import {OrderedMap} from 'immutable'

export type ImgName = 'logo_primary'
    | 'logo_white'
    | 'flag'
    | 'region'
    | 'africa'
    | 'americas'
    | 'asia'
    | 'europe'
    | 'oceania'
    | 'back_arrow'

const imgs: OrderedMap<String, any> = OrderedMap({
        ['logo_primary']: require('./logo_primary.png'),
        ['logo_white']: require('./logo_white.png'),
        ['flag']: require('./flag.png'),
        ['region']: require('./region.png'),
        ['africa']: require('./africa.png'),
        ['americas']: require('./america.png'),
        ['asia']: require('./asia.png'),
        ['europe']: require('./europe.png'),
        ['oceania']: require('./oceania.png'),
        ['back_arrow']: require('./back_arrow.png')
    }
)

const getImgByName = (imgName: ImgName): number => imgs.get(imgName)

export default getImgByName