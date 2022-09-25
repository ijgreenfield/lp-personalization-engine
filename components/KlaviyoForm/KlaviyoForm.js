const KlaviyoForm = (props) => {
    const formId = props.formId
    return (
        <>
            <div className={`klaviyo-form-${formId}`}></div>
            <script type="text/javascript" src="//www.klaviyo.com/media/js/public/klaviyo_subscribe.js"></script> 
        </>
    )
}