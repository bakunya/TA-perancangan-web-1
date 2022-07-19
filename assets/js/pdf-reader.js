
function render(scale = 0.4, disabledElements) {
    let allPages = 0;
    const container = document.getElementById("main")
    window.loadingTask = !window.loadingTask ? pdfjsLib.getDocument(window?.PDFPath) : window.loadingTask
    disabledElements?.forEach(itm => (itm && (itm.disabled = true)))

    window?.loadingTask
        .promise
        .then(async (pdf) => {
            allPages = pdf._pdfInfo.numPages

            container.innerHTML = ''

            for (let i = 1; i <= allPages; i++) {
                const page = await pdf.getPage(i)

                const viewport = page.getViewport({ scale })
                const outputScale = window.devicePixelRatio || 1
                const canvas = document.createElement("canvas")
                const context = canvas.getContext("2d")

                canvas.width =  Math.floor(viewport.width * outputScale)
                canvas.height = Math.floor(viewport.height * outputScale);
                canvas.style.width = Math.floor(viewport.width) + "px";
                canvas.style.height =  Math.floor(viewport.height) + "px";
                canvas.style.display = "block";
                canvas.style.margin =  "auto";
                canvas.id = page._pageIndex

                const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null

                const renderContext = {
                    canvasContext: context,
                    transform: transform,
                    viewport: viewport
                };
                page.render(renderContext);
                
                container.appendChild(canvas)
            }
             
            disabledElements?.forEach(itm => (itm && (itm.disabled = false)))
        })
}

document.addEventListener('DOMContentLoaded', () => {
    let scale = window?.scalePDF ?? 0.4
    const step = 0.1

    const inc = document.getElementById('inc')
    const dec = document.getElementById('dec')
    const loadPDF = document.getElementById('pdf-load')
    
    if(loadPDF) {
        loadPDF.addEventListener('click', () => {
            render(scale, [inc, dec, loadPDF])

            loadPDF.removeEventListener('click', () => {
                render(scale, [inc, dec, loadPDF])
            })
        })
    } else {
        render(scale, [inc, dec, loadPDF])
    }

    inc.addEventListener('click', () => {
        if(scale >= 1.5) return
        scale = Number((scale + step).toFixed(1))
        render(scale, [inc, dec])
    })

    dec.addEventListener('click', () => {
        if(scale <= 0.1) return
        scale = Number((scale - step).toFixed(1))
        render(scale, [inc, dec])
    })
})