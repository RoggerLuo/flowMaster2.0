export default function() {
    fm.getNodes().forEach((el, index) => {
        switch (fm.getTitle(el)) {
            case 'Exclusive gateway':
                if (global.isManualGateway(el)) {
                    el.setProperty('classify', 'manual')
                }
                break
            case "Parallel gateway":
                el.setProperty('classify', 'ParallelGateway')
                break
        }
    })

}