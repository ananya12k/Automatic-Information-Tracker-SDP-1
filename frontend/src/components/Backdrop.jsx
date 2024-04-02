export default function Backdrop({ show }) {
    return (
        show && (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                    backdropFilter: 'blur(10px)',
                }}
            />
        )
    );
};