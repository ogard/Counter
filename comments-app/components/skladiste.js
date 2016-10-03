return (
            <div style={{display: 'flex'}}>
                <input
                    type='text'
                    placeholder='Unesite vase ime'
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                {' '}
                <input 
                    type='text'
                    placeholder='Unasite vas komentar'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                {' '}
                <button onClick={this.handleSubmit}>OK</button>
            </div>
        );