export const view = component => {
    return { content: content(component), styles};
}

const content = component => {
    return `<div class="${component.name}_modal-dialog modal-dialog modal-dialog-centered" role="document">
                <div class="${component.name}_modal-content modal-content">
                    <div class="${component.name}_modal-header modal-header">
                        <h3>Create new user!</h3>
                    </div>
                    <div class="${component.name}_modal-body modal-body">
                        <input required class="mb-3 form-control" placeholder="Name" type="text" name="${component.controls.input_name}" id="${component.controls.input_name}">
                        <input required class="mb-3 form-control" placeholder="Lastname" type="text" name="${component.controls.input_lastname}" id="${component.controls.input_lastname}">
                        <input required class="mb-3 form-control" placeholder="Email" type="email" name="${component.controls.input_email}" id="${component.controls.input_email}">
                        <input required class="mb-3 form-control" placeholder="Country" type="text" name="${component.controls.input_country}" id="${component.controls.input_country}">
                        <input required class="mb-3 form-control" placeholder="Password" type="password" name="${component.controls.input_password}" id="${component.controls.input_password}">
                        <input required class="mb-3 form-control" placeholder="Confirm password" type="password" name="${component.controls.input_confirm}" id="${component.controls.input_confirm}">
                        <div class="mb-4 alert animated-hidden transition-hidden" role="alert" id="${component.name}-tooltip"></div>
                        <div class="button-group d-flex justify-content-end align-items-center">
                            <button class="btn btn-outline-dark px-5 py-1" type="button" name="${component.controls.btn_close}" id="${component.controls.btn_close}">Close</button>
                            <button class="btn btn-dark ms-3 px-5 py-1" type="submit" name="${component.controls.btn_signup}" id="${component.controls.btn_signup}">Signup</button>
                        </div>
                    </div>
                </div>
            </div>`;
};

const styles = {};