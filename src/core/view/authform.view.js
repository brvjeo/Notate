export const view = component => {
    return { content: content(component), styles};
}

const content =  component => {
    return `<div class="img-wrapper d-flex justify-content-center mb-5">
                <img src="../assets/brand-notate.svg" alt="brand-notate" class="${component.name}-img d-flex">
            </div>
            <div class="controls-wrapper d-flex flex-column">
                <input class="mb-3 form-control" type="email" name="${component.controls.input_login}" id="${component.controls.input_login}" placeholder="Email">
                <input class="mb-3 form-control" type="password" name="${component.controls.input_password}" id="${component.controls.input_password}" placeholder="Password">
                <div class="text-center mb-3 animated-hidden transition-hidden" id="${component.name}-tooltip"></div>
                <div class="button-group d-flex flex-column">
                    <button class="mb-3 btn btn-outline-dark" type="submit" name="${component.controls.btn_login}" id="${component.controls.btn_login}">Login</button>
                    <button class="btn btn-dark" type="submit" name="${component.controls.btn_signup}" id=${component.controls.btn_signup}>Signup</button>
                </div>
            </div>`;
};

const styles = {
    width: '300px'
};