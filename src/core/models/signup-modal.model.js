import * as baseModel from "./modal.model"

export const model = () => {
    return baseModel.model(content);
}

const content = `<div class="modal-header d-flex justify-content-center align-items-center">
                    <div class = "img-wrapper">
                        <img src="/assets/brand-notate.svg" alt="brand-notate">
                    </div>
                </div>
                <div class="modal-body"></div>`