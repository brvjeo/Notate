export const model  = (name,controls) => {
    return `<div class="img-wrapper d-flex justify-content-center mb-5">
                <img src="../assets/brand-notate.svg" alt="brand-notate" class="${name}-img d-flex">
            </div>
            <div class="controls-wrapper d-flex flex-column">
                <input class="mb-3 form-control" type="email" name="${controls.input_login}" id="${controls.input_login}" placeholder="Email">
                <input class="mb-3 form-control" type="password" name="${controls.input_password}" id="${controls.input_password}" placeholder="Password">
                <div class="text-center mb-3 animated-hidden transition-hidden" id="${name}-tooltip"></div>
                <div class="button-group d-flex flex-column">
                    <button class="mb-3 btn btn-outline-dark" type="submit" name="${controls.btn_login}">Login</button>
                    <button class="btn btn-dark" type="submit" name="${controls.btn_signup}">Signup</button>
                </div>
            </div>`
};

export const styles = {
    width: '300px'
}